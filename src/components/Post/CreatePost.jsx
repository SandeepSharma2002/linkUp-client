import { useEffect, useRef, useState } from "react";
import { Tag } from "../Common/Tags";
import { Editor } from "@tinymce/tinymce-react";
import Post from "../../Services/Post/Post";
import { toast } from "react-toastify";
import { setRefresh } from "../../Store/Slices/RefreshSlice";
import { RxCross2 } from "react-icons/rx";
import { useDispatch} from "react-redux";


const CreatePost = ({ setShowEditor }) => {
  const [value, setValue] = useState();
  const [text, setText] = useState("");
  const [height, setHeight] = useState(200);
  const [disable, setDisable] = useState(false);
  const [tags, setTags] = useState();
  const dispatch = useDispatch();

  const handleTagChange = (e) => {
    setTags(e.target.value);
  };

  const showToast = (message, type) => {
    toast[type](message);
  };

  const handleFormSubmit = () => {
    if (text?.length < 20) {
      toast.error("Please enter atleast 20 character for post content.");
      return;
    }
    if (tags.length === 0) {
      toast.error("Please enter topic for your post.");
      return;
    }
    setDisable(true);
    let _id = null;
    // if (post) _id = post._id;
    Post.createPost({ des: value, topic:tags, id: _id })
      .then((res) => {
        showToast(res.data.message, "success");
        setValue("");
        dispatch(setRefresh());
        setShowEditor(false);
        setTags([]);
      })
      .catch((err) => {
        console.log(err);
        showToast(err.response.data.message, "error");
      })
      .finally(() => {
        setDisable(false);
      });
  };

  return (
    <section className="min-w-full">
      <div className=" flex justify-between mb-1">
        <h2 className="text-lg font-semibold">Write Your Post</h2>
        <button type="button" onClick={() => setShowEditor(false)}>
          <RxCross2
            size={20}
            className=" hover:scale-110 rounded-full bg-slate-100 p-1"
          />
        </button>
      </div>
      <Editor
        onActivate={() => setHeight(200)}
        onDeactivate={() => setHeight(100)}
        value={value}
        onInit={(evt, editor) => {
          setText(editor.getContent({ format: "text" }));
        }}
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
          setText(editor.getContent({ format: "text" }));
        }}
        apiKey="ur8kvz79zwkfmpqieanxuli8xf5tlmoe319lddpb22pig9fc"
        init={{
          height: height,
          statusbar: false,
          toolbar_location: "bottom",
          menubar: false,
          placeholder: "Write here...😀",
          plugins: ["link", "anchor", "emoticons", "wordcount", "autoresize"],
          toolbar:
            "bold italic forecolor |" + "link |" + "emoticons |" + "button",
          // toolbar_mode: "floating",
          // inline: true,
        }}
      />
      <div className="flex gap-4 my-2">
        <div className="flex flex-1 gap-4 mt-2 px-2 text-gray-600">
          <label className="text-lg">Topic:</label>
          <input
            type="text"
            className=" outline-none border-b bg-transparent border-slate-400 w-full"
            placeholder="Please enter topic... (Ex- general, frontend etc)"
            value={tags}
            onChange={handleTagChange}
          />
        </div>
        <button
          onClick={() => handleFormSubmit()}
          disabled={disable}
          class="inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700"
        >
          Post
        </button>
      </div>
    </section>
  );
};

export default CreatePost;
