"use client";

import { CustomTabPanel } from "@/features/common/myPage";
import { Button, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { type FC, useState } from "react";
import { ArticleList } from "../articleList";

export const Hairdresser: FC = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}

	return (
		<>
			{/* ユーザー情報 */}
			<div style={{ position: "relative", width: "100%", height: 120 }}>
				<Button
					variant="contained"
					sx={{ zIndex: 10, position: "absolute", top: 10, right: 10 }}
				>
					ログアウト
				</Button>
				<Image
					src={"/cutmodel.jpg"}
					objectFit="contain"
					alt="Picture of the author"
					fill
					style={{ objectFit: "cover" }} // オプション: 画像の表示方法を指定
				/>
				<div
					style={{
						position: "absolute",
						bottom: 10,
						left: 10,
						width: 60,
						height: 60,
					}}
				>
					<Image
						src={"/user1.jpg"}
						objectFit="contain"
						alt="Picture of the author"
						fill
						style={{ objectFit: "cover", borderRadius: "50%" }} // オプション: 画像の表示方法を指定
					/>
				</div>
			</div>
			<div style={{ padding: "8px" }}>
				<p style={{ fontSize: "clamp(16px,1.4vw,24px)" }}>
					{"氏名"}/{"所属"}
				</p>
				<p style={{ fontSize: "clamp(16px,1.4vw,24px)" }}>
					{"年数"}/{"場所"}/★{3.5}
				</p>
				<p
					style={{
						fontSize: "clamp(12px,1.4vw,20px)",
						overflow: "hidden",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: 2,
						display: "-webkit-box",
					}}
				>
					{
						"自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文"
					}
				</p>
			</div>
			{/* タブ(メニュー/プロフィール/フォト/口コミ) */}
			<div style={{ width: "100%" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					variant="fullWidth"
					sx={{
						width: "100%",
						height: 32,
						minHeight: 32,
						position: "sticky",
						top: 0,
						zIndex: 10,
					}}
				>
					<Tab
						label="メニュー"
						{...a11yProps(0)}
						sx={{
							fontSize: "clamp(12px,1.4vw,20px)",
							textWrap: "nowrap",
							py: 0,
							height: 32,
							minHeight: 32,
							backgroundColor: "#FFF",
						}}
					/>
					<Tab
						label="プロフィール"
						{...a11yProps(1)}
						sx={{
							fontSize: "clamp(12px,1.4vw,20px)",
							textWrap: "nowrap",
							py: 0,
							height: 32,
							minHeight: 32,
							backgroundColor: "#FFF",
						}}
					/>
					<Tab
						label="フォト"
						{...a11yProps(2)}
						sx={{
							fontSize: "clamp(12px,1.4vw,20px)",
							textWrap: "nowrap",
							py: 0,
							height: 32,
							minHeight: 32,
							backgroundColor: "#FFF",
						}}
					/>
					<Tab
						label="口コミ"
						{...a11yProps(3)}
						sx={{
							fontSize: "clamp(12px,1.4vw,20px)",
							textWrap: "nowrap",
							py: 0,
							height: 32,
							minHeight: 32,
							backgroundColor: "#FFF",
						}}
					/>
				</Tabs>
				<CustomTabPanel value={value} index={0}>
					<ArticleList />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<p>プロフィール</p>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<p>フォト</p>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={3}>
					<p>口コミ</p>
				</CustomTabPanel>
			</div>
		</>
	);
};
