import Link from "next/link";

const FourOhFour: React.FC = () => {
  return (
    <>
      <h1>404 - Page Not Found :(</h1>
      <Link href="../">
        <a>Click me to go to home page</a>
      </Link>
    </>
  );
};
export default FourOhFour;
