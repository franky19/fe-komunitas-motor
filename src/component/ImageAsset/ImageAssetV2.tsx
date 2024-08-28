import Image, { ImageProps as NextImageProps } from "next/image";
import React from "react";

type ImageAssetProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  "height" | "width"
> & {
  src: string | NextImageProps["src"];
  alt?: string;
  width: number;
  height: number;
  fill?: boolean;
  loader?: NextImageProps["loader"];
  quality?: number;
  priority?: boolean;
  loading?: "eager" | "lazy";
  placeholder?: NextImageProps["placeholder"];
  blurDataURL?: string;
  unoptimized?: boolean;
  onLoad?: NextImageProps["onLoad"];
  layout?: string;
  objectFit?: string;
  objectPosition?: string;
  lazyBoundary?: string;
  lazyRoot?: string;
  className?: string;
  onClick?: () => void;
} & React.RefAttributes<HTMLImageElement>;

export const ImageAssetV2 = React.forwardRef<HTMLImageElement, ImageAssetProps>(
  (
    {
      src,
      alt,
      width,
      height,
      fill,
      loader,
      quality,
      priority,
      loading,
      placeholder,
      blurDataURL,
      unoptimized,
      onLoad,
      layout,
      objectFit,
      objectPosition,
      lazyBoundary,
      lazyRoot,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <Image
        src={`${src}`}
        alt={alt || "image"}
        width={width}
        height={height}
        fill={fill}
        loader={loader}
        quality={quality}
        priority={priority}
        loading={loading}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        unoptimized={unoptimized}
        onLoad={onLoad}
        layout={layout}
        objectFit={objectFit}
        objectPosition={objectPosition}
        lazyBoundary={lazyBoundary}
        lazyRoot={lazyRoot}
        className={className}
        onClick={onClick}
        ref={ref}
        {...props}
      />
    );
  }
);

ImageAssetV2.displayName = "ImageAssetv2";

