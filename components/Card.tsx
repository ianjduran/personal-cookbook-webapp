import Link from "next/link";

function RecipeCard(props: { category: string, label: string, href: string }) {
  return (
    <Link href={`${props.href}`}
          className={` active:scale-[98%] transition-all relative py-2 px-2 pb-4 bg-gradient-to-r from-cyan-500 to-blue-500 border inline-block h-40 w-[calc(50%_-_1rem)] rounded-md max-w-[20rem] border-none hover:shadow-xl`} >
          <CategoryLabel text={props.category}></CategoryLabel>
          <p className="absolute text-white font-bold font-header text-2xl bottom-4">{props.label}</p>
    </Link>
  );
}

export default RecipeCard;


export function CategoryLabel(props: { text: string }) {
  return (
    <p className="py-1 px-2 rounded-full inline-block backdrop-blur-md bg-white/10 text-white text-xs tracking-wider uppercase font-subtitle ">{props.text}</p>
  );
}