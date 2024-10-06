import Image from "next/image";

export default function Page() {
	return (
		<>
			<Image
				src={"/screen_design_document.jpg"}
				fill
				objectFit="contain"
				alt="Picture of the author"
			/>
		</>
	);
}
