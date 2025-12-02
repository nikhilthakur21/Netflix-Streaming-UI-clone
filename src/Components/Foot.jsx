const Foot = () => {
  return (
    <>
      <div className=" h-auto md:max-w-5xl m-auto mt-20 ">
        <p className=" text-gray-400 pb-10">Questions? <span className="underline">Call 000-800-919-1743</span></p>

        <div className=" h-auto md:max-w-5xl m-auto  flex flex-col md:flex-row p-4 ">
          <div className=" h-auto w-60  ">
            <li>
              <ul className="text-gray-400 underline">FAQ</ul>

              <ul className="text-gray-400 pt-2 underline">Investor Relations</ul>

              <ul className="text-gray-400 pt-2 underline"> Privacy</ul>
              <ul className="text-gray-400 pt-2 underline">Speed Test</ul>
            </li>
          </div>

          <div className=" h-auto w-60">
            <li>
              <ul className="text-gray-400 underline">Help Centre</ul>

              <ul className="text-gray-400 pt-2 underline">Jobs</ul>
              <ul className="text-gray-400 pt-2 underline">Cookie Preferences</ul>
              <ul className="text-gray-400 pt-2 underline">Legal Notices</ul>
            </li>
          </div>
          <div className=" h-auto w-60">
            <li>
              <ul className="text-gray-400 underline">Account</ul>

              <ul className="text-gray-400 pt-2 underline">Ways to Watch</ul>
              <ul className="text-gray-400 pt-2 underline">Corporate Information</ul>
              <ul className="text-gray-400 pt-2 underline">Only on Netflix</ul>
            </li>
          </div>

          <div className=" h-auto w-60">
            <li>
              <ul className="text-gray-400 underline">Media Centre</ul>

              <ul className="text-gray-400 pt-2 underline">Terms of Use</ul>
              <ul className="text-gray-400 pt-2 underline">Contact Us</ul>
            </li>
          </div>
        </div>

        <p className="text-gray-400 mt-10 text-sm p-4">Netflix India</p>

        <p className="text-gray-400 mt-10 text-sm p-4">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-400 underline">Learn more.</span></p>
        <p className="mt-30">End</p>
      </div>
    </>
  );
};

export default Foot;
