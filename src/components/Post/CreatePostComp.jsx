import React, { Component, useState } from "react";
import { convertToRaw, ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa6";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Post from "../../Services/Post/Post";
import { useNavigate } from 'react-router-dom';

export const CreatePostComp = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setContent] = useState();
  const [Error, setError] = useState(false);
  const [tags, setTags] = useState(null);
  const { username, image } = useSelector(
    (state) => state.User
  );
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const onEditorStateChange = (state) => {
    setEditorState(state);
    const rawContentState = draftToHtml(
      convertToRaw(state.getCurrentContent())
    );
    if (rawContentState) setError(false);
    setContent(rawContentState);
  };

  const toolbarOptions = {
    options: ['inline', 'list', 'link', 'emoji','colorPicker'],
    inline: {
      options: ['bold', 'italic', 'underline'],
    },
    list: {
      options: ['unordered', 'ordered'],
    },
    emoji: {
        emojis: [
          '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
          '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
          '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
          '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
          '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
          '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
          '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
          '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
          '✅', '❎', '💯'
        ],
      },
  };

//   toolbar={{
//     inline: {
//       bold: { icon: Icons.bold, className: 'demo-option-custom' },
//       italic: { icon: Icons.italic, className: 'demo-option-custom' },
//       underline: { icon: Icons.underline, className: 'demo-option-custom' },
//       strikethrough: { icon: Icons.strikethrough, className: 'demo-option-custom' },
//       monospace: { className: 'demo-option-custom' },
//       superscript: { icon: Icons.superscript, className: 'demo-option-custom' },
//       subscript: { icon: Icons.subscript, className: 'demo-option-custom' },
//     },
//     blockType: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
//     fontSize: { className: 'demo-option-custom-medium' },
//     list: {
//       unordered: { icon: Icons.unordered, className: 'demo-option-custom' },
//       ordered: { icon: Icons.ordered, className: 'demo-option-custom' },
//       indent: { icon: Icons.indent, className: 'demo-option-custom' },
//       outdent: { icon: Icons.outdent, className: 'demo-option-custom' },
//     },
//     textAlign: {
//       left: { icon: Icons.left, className: 'demo-option-custom' },
//       center: { icon: Icons.center, className: 'demo-option-custom' },
//       right: { icon: Icons.right, className: 'demo-option-custom' },
//       justify: { icon: Icons.justify, className: 'demo-option-custom' },
//     },
//     fontFamily: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
//     colorPicker: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
//     link: {
//       popupClassName: 'demo-popup-custom
//       link: { icon: Icons.link, className: 'demo-option-custom' },
//       unlink: { icon: Icons.unlink, className: 'demo-option-custom' },
//     },
//     emoji: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
//     embedded: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
//     image: { icon: Icons.image, className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
//     remove: { icon: Icons.eraser, className: 'demo-option-custom' },
//     history: {
//       undo: { icon: Icons.undo, className: 'demo-option-custom' },
//       redo: { icon: Icons.redo, className: 'demo-option-custom' },
//     },
//   }}

const handleTagChange = (e) => {
    setTags(e.target.value);
  };

  const showToast = (message, type) => {
    toast[type](message);
  };

  const handleFormSubmit = () => {

    if (content?.length < 20) {
        showToast("Post content must contain atleast 20 letters.", "error");
      return;
    }
    if (!tags) {
        showToast("Please enter topic for your post.","error");
      return;
    }
    setDisable(true);
    let _id = null;
    // if (post) _id = post._id;
    const topic=tags.toLowerCase();
    Post.createPost({ des: content, topic , id: _id })
      .then((res) => {
        showToast(res.data.message, "success");
        navigate('/');
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
    <div class="mx-auto h-full overflow-y-auto dark:bg-gray-900 hide-scroll">
      <div
        class="h-[64px] flex justify-between items-center px-4 border-b w-full sticky z-50 bg-gray-light
    top-0 left-0 border-gray-dark dark:bg-bg-dark-1 dark:border-text-l-500"
      >
        <p class="text-xl font-bold text-gray-700 dark:text-primary-600">
          Create Post
        </p>
      </div>
      <div className="px-6 mt-4">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={(e) => onEditorStateChange(e)}
          editorStyle={{
            border: "1px solid #f3f4f6",
            borderRadius: "4px",
            minHeight: "100px",
            paddingInline: "10px",
            lineHeight: "20px",
          }}
          toolbar={toolbarOptions}
          placeholder="Write your awesome content here...😁😁😁"
          hashtag={{
            separator: ' ',
            trigger: '#',
            suggestions: [
                { text: 'APPLE', value: 'apple', url: 'apple' },
                { text: 'BANANA', value: 'banana', url: 'banana' },
                { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                { text: 'DURIAN', value: 'durian', url: 'durian' },
                { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                { text: 'FIG', value: 'fig', url: 'fig' },
                { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
              ],
          }}
        //   mention={{
        //     separator: " ",
        //     trigger: "#",
        //     suggestions: [
        //       { text: "APPLE", },
        //       { text: "BANANA", value: "banana", url: "banana" },
        //       { text: "CHERRY", value: "cherry", url: "cherry" },
        //       { text: "DURIAN", value: "durian", url: "durian" },
        //       { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
        //       { text: "FIG", value: "fig", url: "fig" },
        //       { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
        //       { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
        //     ],
        //   }}
        />

        {/* Hastag to get suggestions */}

        <div className="flex gap-4 my-2">
          <div className="flex flex-1 items-center gap-4 mt-2 px-2 text-text-l-500">
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
            // disabled={disable}
            class="inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>

      <div class="py-6 px-6 text-base border-b z-0 border-gray-dark last:border-0">
      <h3 className="text-blue-600 mb-6 underline underline-offset-4 text-2xl lg:text-4xl">Live Preview:</h3>
        <article class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <img class="mr-2 w-10 h-10 rounded-lg" src={image} alt={username} />
            <div>
              <p class="inline-flex items-center mr-3 text-black dark:text-white font-semibold">
                {username}
              </p>
              <p class=" text-text-l-500 dark:text-gray-400">
                <time title="February 8th, 2022">
                  {months[new Date().getMonth()] + " " + new Date().getDate()}
                </time>
              </p>
            </div>
          </div>
          <div className="relative">
            <button
              class="inline-flex items-center p-2 text-sm rotate-90 font-medium text-center text-gray-500 dark:text-gray-400 rounded-lg hover:bg-gray-100 focus:outline-none  dark:hover:bg-gray-700 dark:focus:ring-text-l-500"
              type="button"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span class="sr-only">Comment settings</span>
            </button>
          </div>
        </article>
        <div
          className="my-2 dark:text-white"
          dangerouslySetInnerHTML={{ __html: content || "<p class=' text-text-l-500'>Content will appear here.</p>"  }}
        />
        
        <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
          {tags || "Topic"}
        </span>
        <div class="flex items-center mt-4 space-x-4">
          <button
            type="button"
            class="flex items-center text-sm text-text-l-500 hover:underline dark:text-gray-400 font-medium"
          >
            <FaHeart className="text-red-600 mr-1" size={12} />1 Like
          </button>
          <button
            type="button"
            class="flex items-center text-sm text-text-l-500 hover:underline dark:text-gray-400 font-medium"
          >
            <TfiCommentAlt className="mr-1" size={12} />0 Comment
          </button>
        </div>
      </div>
    </div>
  );
};
