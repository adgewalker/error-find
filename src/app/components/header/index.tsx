import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-row border-b-[1px] border-black w-full p-4">
      {/* <h1 className="text-lg">Cambridge University Press & Assessment</h1> */}
      <Image src='https://www.cambridge.org/modules/custom/gnav/icons/cambridge-logo-@2x.png' className='m-auto sm:m-0' alt='Cambridge University Press & Assessment' width={270} height={45} />
    </div>
  );
};
