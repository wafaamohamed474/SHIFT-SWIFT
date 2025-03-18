
import Map from "../../../assets/Component 138.png";
function SideJobsSection() {
  return (
    <div className="container border-y border-border-color pb-20">
      <div className="flex flex-col items-center py-10">
        <h6 className="font-semibold text-2xl lg:text-4xl">
          Side jobs and temp staff across Egypt
        </h6>
        <p>Reach your Job goals fast with the world`s #1 Job app</p>
      </div>
      <div className="p-10">
        <img src={Map} />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 text-center">
        <div>
          <h1 className="font-bold lg:text-5xl">4.5K+</h1>
          <p>Jobs are posted in our app every month</p>
        </div>
        <div>
          <h1 className="font-bold lg:text-5xl">1.5K+</h1>
          <p>Language In the world</p>
        </div>
        <div>
          <h1 className="font-bold lg:text-5xl">1000K+</h1>
          <p>Total learners in the world</p>
        </div>
      </div>
    </div>
  );
}

export default SideJobsSection;
