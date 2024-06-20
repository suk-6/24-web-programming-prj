import { Card } from "@/components/card/card";
import { Title } from "@/components/header/title";
import { ImageSlider } from "@/components/imageSlider/imageSlider";

import Example1 from "@/images/example1.png";

export default function Home() {
	return (
		<main className=" w-screen h-screen">
			<div className=" w-full h-full flex flex-col">
				<Title />
				<div className=" w-full h-full overflow-y-scroll">
					<div className=" w-full h-[500px] flex justify-center p-10">
						<ImageSlider />
					</div>
					<div className=" w-full h-fit">
						<div className=" w-full h-fit px-8 pt-5 flex flex-wrap gap-10 justify-center">
							{[...Array(5)].map((_, i) => (
								<Card
									key={i}
									title="Card Title"
									description="Card Description"
									image={Example1}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
