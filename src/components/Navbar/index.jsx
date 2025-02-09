import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <h1 className={style.header}>SHIFT SWIFT</h1>
      <p className="text-3xl font-bold bg-red-500">Tailwind css</p>
      <div className="container sm:max-w-sm md:max-w-md md:bg-red-700 lg:max-w-lg lg:bg-blue-700 xl:max-w-xl 2xl:max-w-2xl mx-auto p-4 bg-gray-100">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
        quae fugiat dolores quas non architecto reprehenderit sapiente magni
        nisi neque illo quod dicta provident vel delectus inventore nostrum ut
        at.
      </div>
    </>
  );
};

export default Navbar;
