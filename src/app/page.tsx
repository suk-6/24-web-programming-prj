import { Title } from "@/components/header/title";
import { ImageSlider } from "@/components/imageSlider/imageSlider";

export default function Home() {
	return (
		<main className=" w-screen h-screen">
			<div className=" w-full h-full flex flex-col">
				<Title />
				<div className=" w-full h-full flex justify-center p-10">
					<ImageSlider />
				</div>
			</div>
		</main>
	);
}
