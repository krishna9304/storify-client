import { Button } from "antd";
import { FC, useState } from "react";
import Dropzone from "../../dropzone";

interface VerifyIdentityProps {
  setCurrentStep: any;
}

const VerifyIdentity: FC<VerifyIdentityProps> = ({ setCurrentStep }) => {
  const [aadharImage, setAadharImage] = useState<File & { preview: string }>();
  const [panImage, setPanImage] = useState<File & { preview: string }>();

  function handleClick() {
    setCurrentStep(2);
  }

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-5 justify-center items-center shadow-xl p-10">
        <div className="text-xl font-light">Upload your Aadhar Card</div>
        <Dropzone
          heading="Drop the image"
          image={aadharImage}
          setImage={setAadharImage}
          classNames={"text-center"}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center shadow-xl p-10">
        <div className="text-xl font-light">Upload your PAN Card</div>
        <Dropzone
          heading="Drop the image"
          image={panImage}
          setImage={setPanImage}
          classNames={"text-center"}
        />
      </div>
      <div className="flex justify-between">
        <Button onClick={() => setCurrentStep(0)} type="primary">
          Back
        </Button>
        <Button onClick={handleClick} type="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default VerifyIdentity;
