import { useRouter } from "next/router";

export function getServerSideProps() {
  return {};
}

export default Pokemon = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Pokemon: {id}</p>;
};
