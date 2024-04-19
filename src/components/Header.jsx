import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className=" rounded-full size-[60px] sm:size-[130px] overflow-hidden p-[5px] border-2 border-neutral-300">
        <img
          src="/public/profile_pic-3.webp"
          alt="Profile pic"
          className="size-full aspect-auto rounded-full"
        />
      </div>
      <h1 className=" text-2xl font-bold">Prathmesh Umberkar</h1>
      <p className=" text-neutral-400">
        I'm versatile front-end developer, I am dedicated to continual
        improvement and thrive on tackling new challenges. I am driven by a
        passion for crafting innovative, user-centric products.
      </p>
      <div className="flex gap-2">
        <a
          href="https://github.com/prthmh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="custom-link">
            github <MdArrowOutward size={20} />
          </div>
        </a>
        <a
          href="https://twitter.com/prAtmsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="custom-link">
            twitter <MdArrowOutward size={20} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/prathmesh-umberkar-31220216a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="custom-link">
            linkedin <MdArrowOutward size={20} />
          </div>
        </a>

        <a
          href="https://peerlist.io/prathmeshumb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="custom-link">
            peerlist <MdArrowOutward size={20} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
