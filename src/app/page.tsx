"use client";

import { Card } from "@/components/card/card";
import { Title } from "@/components/header/title";
import { ImageSlider } from "@/components/imageSlider/imageSlider";
import data from "@/data.json";
import { useState } from "react";

export default function Home() {
	const [search, setSearch] = useState("");

	return (
		<main className=" w-screen h-screen">
			<div className=" w-full h-full flex flex-col">
				<Title search={search} setSearch={setSearch} />
				<div className=" w-full h-full overflow-y-scroll pb-12">
					{search === "" && (
						<div className=" w-full h-[800px] flex justify-center p-10">
							<ImageSlider />
						</div>
					)}
					<div className=" w-full h-fit">
						<div className=" w-full h-fit px-8 pt-5 flex flex-wrap gap-10 justify-center">
							{data.styles.map((style, i) => {
								if (search !== "") {
									if (
										!style["title"].includes(search) &&
										!style.tags.includes(search)
									)
										return null;
								}
								return (
									<Card
										key={i}
										title={style["title"]}
										image={style["image"]}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
