import Header from '../components/Header';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center">
        <div className="h-36 md:h-48 lg:h-56" />
          <div className="font-hrot text-center text-lg md:text-xl lg:text-2xl">
            NORMS
          </div>
          <div className="h-4" />
          <div className="text-center font-light md:text-lg">
          Being able to change myself<br></br>
          is the threshold that keeps me alive.
          </div>
          <div className="h-4"></div>
          <div className="text-center font-light md:text-lg">
          I run after inertia, and negativeness.
          </div>
        <div className="grow" />
        <div className="h-36" />
        <div className="h-24 text-center text-xs md:text-sm lg:text-base">
          Copyright © IM SEONGJOON. All rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Page;
