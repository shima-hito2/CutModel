import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { type FC, useState } from "react";

const ProFileQA: FC<{ title: string; details: string }> = (props: {
	title: string;
	details: string;
}) => {
	const { title, details } = props;
	return (
		<>
			<p
				style={{
					fontSize: "clamp(16px,1.4vw,24px)",
				}}
			>
				{title}
			</p>
			<p
				style={{
					fontSize: "clamp(16px,1.4vw,24px)",
				}}
			>
				→{details}
			</p>
		</>
	);
};

export const Profile: FC = () => {
	const [detailsIsOpen, setDetailsIsOpen] = useState(false);
	const [skillsIsOpen, setSkillsIsOpen] = useState(false);
	return (
		<>
			<div
				style={{
					border: "1px solid #F8BBD0",
					borderRadius: "12px",
					boxShadow: "rgba(243, 123, 152, 0.3) 0px 2px 6px",
					padding: "16px",
				}}
			>
				<p style={{ fontSize: "clamp(16px,1.4vw,24px)", fontWeight: "bold" }}>
					自己紹介詳細
				</p>
				{detailsIsOpen ? (
					<>
						<p
							style={{
								fontSize: "clamp(16px,1.4vw,24px)",
							}}
						>
							{
								"自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容"
							}
						</p>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<Button
								startIcon={<ArrowBackIcon />}
								sx={{ p: 0 }}
								onClick={() => {
									setDetailsIsOpen(false);
								}}
							>
								閉じる
							</Button>
						</div>
					</>
				) : (
					<>
						<p
							style={{
								fontSize: "clamp(16px,1.4vw,24px)",
								overflow: "hidden",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: 3,
								display: "-webkit-box",
							}}
						>
							{
								"自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容自己紹介の内容"
							}
						</p>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<Button
								endIcon={<ArrowForwardIcon />}
								sx={{ p: 0 }}
								onClick={() => {
									setDetailsIsOpen(true);
								}}
							>
								もっと見る
							</Button>
						</div>
					</>
				)}
			</div>
			<div
				style={{
					border: "1px solid #F8BBD0",
					borderRadius: "12px",
					boxShadow: "rgba(243, 123, 152, 0.3) 0px 2px 6px",
					padding: "16px",
					marginTop: "16px",
				}}
			>
				<p style={{ fontSize: "clamp(16px,1.4vw,24px)", fontWeight: "bold" }}>
					アピール/特技
				</p>
				{skillsIsOpen ? (
					<>
						<p
							style={{
								fontSize: "clamp(16px,1.4vw,24px)",
							}}
						>
							{
								"アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。"
							}
						</p>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<Button
								startIcon={<ArrowBackIcon />}
								sx={{ p: 0 }}
								onClick={() => {
									setSkillsIsOpen(false);
								}}
							>
								閉じる
							</Button>
						</div>
					</>
				) : (
					<>
						<p
							style={{
								fontSize: "clamp(16px,1.4vw,24px)",
								overflow: "hidden",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: 3,
								display: "-webkit-box",
							}}
						>
							{
								"アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。アピールと特技が入ります。"
							}
						</p>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<Button
								endIcon={<ArrowForwardIcon />}
								sx={{ p: 0 }}
								onClick={() => {
									setSkillsIsOpen(true);
								}}
							>
								もっと見る
							</Button>
						</div>
					</>
				)}
			</div>
			<div
				style={{
					border: "1px solid #F8BBD0",
					borderRadius: "12px",
					boxShadow: "rgba(243, 123, 152, 0.3) 0px 2px 6px",
					padding: "16px",
					marginTop: "16px",
				}}
			>
				<p style={{ fontSize: "clamp(16px,1.4vw,24px)", fontWeight: "bold" }}>
					プロフィール
				</p>
				<ProFileQA title={"得意な施術"} details={"パンチパーマ"} />
				<ProFileQA title={"趣味"} details={"サンプル"} />
				<ProFileQA title={"性別"} details={"サンプル"} />
				<ProFileQA title={"好きなこと"} details={"サンプル"} />
				<ProFileQA title={"もし世界が滅びるなら"} details={"サンプル"} />
			</div>
		</>
	);
};
