import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" xl:flex absolute z-30 xl:max-w-none">
      <Image
        src={"/Avatar.png"}
        width={1037}
        height={2078}
        alt=""
        className="translate-z-0 bottom-0 w-full h-full "
      />
    </div>
  );
};

export default Avatar;
