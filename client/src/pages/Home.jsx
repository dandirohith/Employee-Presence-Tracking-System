import video from "../artifacts/video3.mp4";

function Home() {
  return (
    <div className="flex relative w-full h-[100vh]">
      <div className="flex absolute w-full h-[100vh]">
        <video
          class="relative mt-[-20] top-0 left-0 w-full h-[100vh]"
          src={video}
          autoPlay
          loop
          muted
        />
      </div>
      <div class="relative w-full top-0 left-0 flex flex-col justify-center items-center text-white">
        <div class=" w-full flex flex-col justify-center items-center text-center">
          <h1 class="text-7xl">
            Effortlessly Monitor Employee Presence with Our Simple System
          </h1>
          <h2 class="text-4xl font-cutive">
            "Elevate Productivity, Track with Ease!"
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
