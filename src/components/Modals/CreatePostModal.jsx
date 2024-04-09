import { useEffect, useState } from "react";
import { FcGallery } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { PiGifFill } from "react-icons/pi";
import { GrDocumentPdf } from "react-icons/gr";
import Post from "../../Services/Post/Post";
import { toast } from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import Picker from "emoji-picker-react";
import { useDispatch } from "react-redux";
import { setRefresh } from "../../Store/Slices/RefreshSlice";
import { Tag } from "../Common/Tags";
import { MdOutlineClose } from "react-icons/md";

export const CreatePostModal = ({ setShowModal, post = null }) => {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [disable, setDisable] = useState(false);
  const [editorContent, setEditorContent] = useState([]);
  const [files, setFiles] = useState([]);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [uploaded, setUploaded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post != null) {
      setEditorContent(post.des.join("\n"));
      setTags(post.tags);
      setUploadedFiles(post.postImages)
      setUploaded(false);
    }
  }, []);

  const handleFileUpload = () => {
    setDisable(true);
    const id = toast.loading("Images Uploading...", { autoClose: 2000 });
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append("image", file);
      Post.uploadPostImage(formData, setUploadPercentage)
        .then((res) => {
          setUploadedFiles((prev) => [...prev, res.data?.imageUrl]);
          setUploaded(true);
          setImagePreview([]);
          if (files.length - 1 === index) {
            toast.update(id, {
              render: "Uploaded Successfully",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
          }
        })
        .catch((err) =>
          toast.update(id, {
            render: err?.response?.data?.message,
            type: "success",
            isLoading: false,
            autoClose: 2000,
          })
        )
        .finally(() => setDisable(false));
    });
  };

  const handleFormSubmit = (draft = false) => {
    if (tags.length == 0) {
      toast.error("Please give atleast one tag.");
      return;
    }
    setDisable(true);
    const id = toast.loading("Posting...", { autoClose: 2000 });
    let des = splitTextAreaContent(editorContent);
    let _id = null;
    if (post) _id = post._id;
    Post.createPost({ des, postImages: uploadedFiles, tags, draft, id: _id })
      .then((res) => {
        console.log(editorContent);
        toast.update(id, {
          render: res.data.message,
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        setShowModal(false);
        dispatch(setRefresh());
      })
      .catch((err) => {
        console.log(err);
        toast.update(id, {
          render: err?.response?.data?.message,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      })
      .finally(() => setDisable(false));
  };

  const handleEmojiSelect = (emoji) => {
    console.log(emoji);
    setEditorContent((prev) => `${prev + emoji.emoji}`);
  };

  function splitTextAreaContent(text) {
    if (!text) return [];
    return text.split("\n").filter((line) => line.trim() !== "");
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview([...imagePreview, reader.result]);
      };
      reader.readAsDataURL(file);
    }
    setFiles([...files, file]);
  };

  const handleChange = (e) => {
    let input = e.target;
    setExpanded(false);
    setEditorContent(input.value);
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  };

  const handleRemoveImage = (index) => {
    setUploaded(false);
    setImagePreview((prevImagePreviews) => {
      const updatedPreviews = [...prevImagePreviews];
      updatedPreviews.splice(index, 1);
      return updatedPreviews;
    });
  };

  const handleUploadedRemoveImage = (index) => {
    setUploaded(false);
    setUploadedFiles((prevImagePreviews) => {
      const updatedPreviews = [...prevImagePreviews];
      updatedPreviews.splice(index, 1);
      return updatedPreviews;
    });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13 && tag.length > 0) {
      setTags((prev) => [tag, ...prev]);
      setTag("");
    }
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <>
      <div
        className="fixed z-20 overflow-y-auto top-0 w-full left-0"
        onClick={() => setShowModal(false)}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 w-screen min-h-screen bg-white/20" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block w-[600px] min-h-48 align-center bg-body-d rounded-lg text-left shadow-xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-transparent overflow-hidden rounded-t-lg">
              <div className="flex items-start justify-between pt-3 py-2 px-5 border-b border-solid border-white/50 rounded-t">
                <button
                  type="button"
                  className="text-btn-text-1 font-medium glass px-4 py-2 text-btn-color rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleFormSubmit(true)}
                >
                  Draft
                </button>
                <button
                  className="p-1 ml-auto border-0 text-white opacity-60 float-right text-3xl leading-none font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  <MdOutlineClose/>
                </button>
              </div>
            </div>

            <div className="px-4 my-2">
              <div className="relative z-[10000000]">
                <textarea
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                  value={editorContent}
                  rows={post?.des.length || 1}
                  className="w-full bg-transparent outline-none border-b border-grey pb-2 mb-2 resize-none text-white/70 hide-scroll"
                  placeholder="Write here..."
                />
                <div className="grid grid-cols-3">
                  {imagePreview.length > 0 &&
                    imagePreview.map((img, index) => (
                      <div className="relative w-fit">
                        <button className="bg-black absolute -top-2 -right-2 p-1 rotate-45 rounded-full text-white">
                          <FaPlus
                            size={16}
                            onClick={() => handleRemoveImage(index)}
                          />
                        </button>
                        <img src={img} className="w-40 h-40" />
                      </div>
                    ))}

                  {uploadedFiles.length > 0 &&
                    uploadedFiles.map((img, index) => (
                      <div className="relative w-fit">
                        <button className="bg-black absolute -top-2 -right-2 p-1 rotate-45 rounded-full text-white">
                          <FaPlus
                            size={16}
                            onClick={() => handleUploadedRemoveImage(index)}
                          />
                        </button>
                        <img src={img} className="w-40 h-40" />
                      </div>
                    ))}

                  {imagePreview.length > 0 && !uploaded && (
                    <button
                      disabled={disable}
                      className="text-sm px-2 py-1 bg-main text-white bg-btn-color rounded-xl col-span-full w-fit mt-4 mx-auto"
                      onClick={handleFileUpload}
                    >
                      Upload
                    </button>
                  )}
                </div>
                <div className="mt-4 text-white">
                  <label>
                    Tags{" "}
                    <span className="text-dark-grey opacity-70">
                      (This will in searching and ranking feeds.)
                    </span>
                    <input
                      type="text"
                      className="w-full outline-none bg-transparent rounded-xl border border-grey p-2 mt-2 text-white/70"
                      placeholder="Please enter tags... (Ex- python, c++)"
                      value={tag}
                      onKeyDown={handleKeyDown}
                      onChange={handleTagChange}
                    />
                  </label>
                  <div className="flex gap-1 flex-wrap mt-2">
                    {tags.map((t, i) => (
                      <Tag tag={t} index={i} setTags={setTags} />
                    ))}
                  </div>
                </div>
                <div className="flex mt-4 gap-6 items-center text-xl p-2 ">
                  <label className="hover:cursor-pointer">
                    <FcGallery size={24} />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/jpeg, image/jpg, image/png"
                      // maxlength="5242880"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </label>
                  <label className="hidden">
                    <GrDocumentPdf size={24} className="text-[#dc2626]" />
                  </label>
                  <label className="hidden">
                    <PiGifFill size={24} className="text-[#0284c7]" />
                    <input
                      type="file"
                      accept="image/gif"
                      className="hidden"
                      maxlength="5242880"
                    />
                    <input
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      maxlength="5242880"
                    />
                  </label>
                  <label className="flex gap-2">
                    <EmojiPicker
                      open={!expanded}
                      reactionsDefaultOpen={true}
                      allowExpandReactions={false}
                      onEmojiClick={handleEmojiSelect}
                      onReactionClick={handleEmojiSelect}
                      skinTonesDisabled
                    />
                    <EmojiPicker
                      height={300}
                      open={expanded}
                      width={300}
                      lazyLoadEmojis={true}
                      searchDisabled
                      reactionsDefaultOpen={!expanded}
                      onEmojiClick={handleEmojiSelect}
                      onReactionClick={handleEmojiSelect}
                      skinTonesDisabled
                    />
                    <button
                      onClick={() => setExpanded(!expanded)}
                      size={32}
                      className={`bg-dark-grey h-fit p-1 transition-all duration-200 rounded-full ${
                        expanded ? "rotate-45" : "my-auto"
                      }`}
                    >
                      <FaPlus />
                    </button>
                  </label>
                  <button
                    type="button"
                    onClick={() => handleFormSubmit(false)}
                    disabled={editorContent.length < 1 || disable}
                    className="bg-btn-color text-white px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-auto disabled:bg-opacity-70"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
