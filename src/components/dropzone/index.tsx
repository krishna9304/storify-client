/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone: React.FC<{
  setImage: (_: File & { preview: string }) => void;
  image: (File & { preview: string }) | undefined;
  classNames?: string;
  heading: string;
}> = ({ setImage, image, classNames, heading }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: (acceptedFiles) => {
      setImage(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
  });

  return (
    <div className={classNames} {...getRootProps()}>
      <input {...getInputProps()} ref={imageInputRef} />
      {image ? (
        <img src={image.preview} alt={image.name} />
      ) : (
        <>
          <h5>{heading}</h5>
          <p>
            or
            <br />
            <button
              onClick={() => {
                imageInputRef.current?.click();
              }}
              onKeyDown={() => {
                imageInputRef.current?.click();
              }}
              role="button"
              tabIndex={0}
              className="bg-blue-500 text-white py-1 px-3"
            >
              Browse
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Dropzone;
