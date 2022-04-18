import { Button, Upload } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { FC, useState } from "react";
import { beforeUpload, getBase64 } from "../../../utils/file";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

interface VerifyIdentityProps {
  setCurrentStep: any;
}

const VerifyIdentity: FC<VerifyIdentityProps> = ({ setCurrentStep }) => {
  const [aadharImageUrl, setAadharImageUrl] = useState("");
  const [panImageUrl, setPanImageUrl] = useState("");
  const [aadharloading, setAadharLoading] = useState(false);
  const [panLoading, setPanLoading] = useState(false);

  const handleChange = (info: UploadChangeParam, name: string) => {
    if (info.file.status === "uploading") {
      name === "aadhar" ? setAadharLoading(true) : setPanLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imgUrl: string) => {
        name === "aadhar" ? setAadharImageUrl(imgUrl) : setPanImageUrl(imgUrl);
        setAadharLoading(false);
      });
    }
  };

  function handleClick() {
    setCurrentStep(2);
  }

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-5 justify-center items-center shadow-xl p-10">
        <div className="text-xl font-light">Upload your Aadhar Card</div>
        <Upload
          name="aadhar"
          listType="picture"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={(e) => handleChange(e, "aadhar")}
        >
          {aadharImageUrl ? (
            <img
              src={aadharImageUrl}
              alt="avatar"
              style={{ width: "100%", height: "100px" }}
            />
          ) : (
            <div>
              {aadharloading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center shadow-xl p-10">
        <div className="text-xl font-light">Upload your PAN Card</div>
        <Upload
          name="pan"
          listType="picture"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={(e) => handleChange(e, "pan")}
        >
          {panImageUrl ? (
            <img
              src={panImageUrl}
              alt="avatar"
              style={{ width: "100%", height: "100px" }}
            />
          ) : (
            <div>
              {panLoading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
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
