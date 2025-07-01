import logoImg from "../assets/arqyn_dev_logo.jpg";

const Logo = () => {
  return (
    <div className="flex flex-row-reverse p-2">
      <h2 className="p-2">Arqyn</h2>
      <a href="/" aria-label="Homepage" className="inline-block">
        <img src={logoImg} alt="Arqyn Dev Logo" className="h-8 w-auto object-contain rounded-sm mt-1" />
      </a>
    </div>
  );
};

export default Logo;
