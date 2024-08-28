import { ImageAsset } from "../ImageAsset";
import { ImageAssetV2 } from "../ImageAsset/ImageAssetV2";

type AvatarProps = {
  AvatarSrc: string;
  position?: string;
  name?: string;
  classNamePosition?: string;
  classNameAvatarName?: string;
  classNameImage?: string;
};

const Avatar = (props: AvatarProps) => {
  return (
    <div className="">
      <ImageAssetV2
        height={100}
        width={100}
        src={props.AvatarSrc}
        alt="Avatar"
        className={props.classNameImage}
      />
      <p className={`${props.classNamePosition} text-[#D3D3D3]`}>
        {props.position}
      </p>
      <p className={`${props.classNameAvatarName} text-[#FF9800]`}>
        {props.name}
      </p>
    </div>
  );
};

export default Avatar;
