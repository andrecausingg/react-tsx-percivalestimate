import underUpgrade from "../../../assets/images/under-upgrade/under-upgrade.svg";

const UnderUpgrade: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 bg-slate-900 font-gilroyLight flex flex-col justify-center item-center"></div>
      <div className="flex flex-col justify-center item-center fixed inset-0 z-[99999999]">
        <img src={underUpgrade} alt="" className="w-[300px] mx-auto md:w-[600px]" />
        <h1 className="mx-auto text-orangeClient text-4xl font-ExtraBold">Under Upgrade</h1>
      </div>
    </>
  );
};

export default UnderUpgrade;
