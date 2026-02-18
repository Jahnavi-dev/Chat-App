import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"});
  }, [])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet c.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              eius vero et. Quo eum dolorum libero qui reiciendis dolore
              corrupti autem ad saepe, ut, excepturi harum atque, obcaecati
              adipisci ea.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              eius vero et. Quo eum dolorum libero qui reiciendis dolore
              corrupti autem ad saepe, ut, excepturi harum atque, obcaecati
              adipisci ea.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              eius vero et. Quo eum dolorum libero qui reiciendis dolore
              corrupti autem ad saepe, ut, excepturi harum atque, obcaecati
              adipisci ea.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <img
            src="https://img.pikbest.com/photo/20241005/bright-sunny-day-with-a-clear-blue-sky_10926278.jpg!w700wp"
            alt="" className="single"
          />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              eius vero et. Quo eum dolorum libero qui reiciendis dolore
              corrupti autem ad saepe, ut, excepturi harum atque, obcaecati
              adipisci ea.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type message here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">send</button>
      </div>
    </div>
  );
};

export default Chat;
