import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" xl:flex absolute xl:max-w-none">
      <Image
        src={"/me2.png"}
        width={1837}
        height={1378}
        alt=""
        className="translate-z-0 bottom-0 w-full h-full mix-blend-color-burn"
      />
    </div>
  );
};

export default Avatar;
