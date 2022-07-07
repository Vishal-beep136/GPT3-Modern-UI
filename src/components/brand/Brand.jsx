import "./brand.css";
import {
  atlassianImg,
  dropboxImg,
  googleImg,
  shopifyImg,
  slackImg,
} from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={googleImg} alt="google" />
      </div>
      <div>
        <img src={dropboxImg} alt="dropbox" />
      </div>
      <div>
        <img src={slackImg} alt="slack" />
      </div>
      <div>
        <img src={shopifyImg} alt="shopify" />
      </div>
      <div>
        <img src={atlassianImg} alt="atlassian" />
      </div>
    </div>
  );
};

export default Brand;
