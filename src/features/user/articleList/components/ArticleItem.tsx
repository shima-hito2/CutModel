/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import Link from "next/link";
import type { ArticleItem as TArticleItem } from "@/app/type/articleItem";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { FavoriteBorder, Link as LinkIcon } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, XIcon } from "react-share";

type Props = {
	article: TArticleItem;
};

export const ArticleItem: FC<Props> = (props: Props) => {
	const { article } = props;

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const icon = event.currentTarget.querySelector("svg");
		if (icon) {
			icon.style.color = icon.style.color === "red" ? "#B0BEC5" : "#FF4081";
		}
	};

	const [open, setOpen] = React.useState(false);
	const [shareUrl, setShareUrl] = React.useState("");
	const title = "共有するタイトル";

	React.useEffect(() => {
		setShareUrl(window.location.href);
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div
			style={{
				border: "1px solid #F8BBD0",
				borderRadius: "12px",
				overflow: "hidden",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "transparent",
				position: "relative",
				boxShadow: "0 2px 6px rgba(243, 123, 152, 0.3)",
			}}
		>
			<Link
				href={`/hairdresser`}
				passHref
				target="_blank"
				style={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					padding: "16px 16px 5px 16px",
					width: "80%",
					margin: "0 auto",
				}}
			>
				<img
					src={article.user.imageUrl}
					alt={article.user.name}
					style={{
						borderRadius: "50%",
						width: "50px",
						height: "50px",
						border: "1px solid #FFCDD2",
						marginRight: "16px",
					}}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "70%",
					}}
				>
					<h3
						style={{
							margin: "0",
							fontSize: "16px",
							fontWeight: "bold",
							color: "#AD1457",
						}}
					>
						{article.user.name}
					</h3>
					<p
						style={{
							fontSize: "12px",
							color: "#B0BEC5",
						}}
					>
						testsalon 堺筋本町店
					</p>
				</div>
			</Link>
			<Link
				href={`/list/${article.details.id}`}
				passHref
				target="_blank"
				style={{
					width: "80%",
					margin: "0 auto 12px auto",
					fontSize: "12px",
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: 3,
					overflow: "hidden",
					color: "#AD1457",
				}}
			>
				【期間限定価格】韓国風🇰🇷透明感カラー+動きのあるレイヤーカット+オリジナルトリートメント+コテ巻き仕上げ🤍
			</Link>
			<Link
				href={`/list/${article.details.id}`}
				passHref
				target="_blank"
				style={{
					border: "1px solid #F8BBD0",
					borderRadius: "12px",
					overflow: "hidden",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					backgroundColor: "transparent",
					margin: "0 auto",
					position: "relative",
					width: "80%",
				}}
			>
				<img
					src={article.details.imageUrl}
					alt={article.user.name}
					style={{
						width: "100%",
						aspectRatio: "9/7",
						objectFit: "cover",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "60%",
						left: "0",
						right: "0",
						bottom: "0",
						background: "rgba(255, 64, 129, 0.5)",
						color: "white",
						padding: "10px 10px 0 10px",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						zIndex: "1",
					}}
				>
					<p
						style={{
							fontSize: "14px",
							color: "#fff",
							display: "-webkit-box",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 2,
							overflow: "hidden",
							width: "90%",
							margin: "0 auto",
						}}
					>
						{article.details.body}
					</p>
				</div>
				<p
					style={{
						position: "absolute",
						bottom: "5px",
						right: "14px",
						color: "#fff",
						zIndex: "1",
						fontSize: "18px",
						fontWeight: "bold",
					}}
				>
					6000円
				</p>
				<p
					style={{
						position: "absolute",
						bottom: "10px",
						left: "14px",
						color: "#fff",
						zIndex: "1",
						fontSize: "12px",
					}}
				>
					2024/11/23まで
				</p>
			</Link>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "80%",
					margin: "10px auto",
				}}
			>
				<IconButton onClick={handleClick} style={{ padding: "0", color: "#FF4081" }}>
					<FavoriteBorder />
				</IconButton>
				<IconButton onClick={handleClickOpen}>
					<ShareIcon style={{ color: "#FF4081" }} />
				</IconButton>

				{shareUrl && (
					<Dialog
						onClose={handleClose}
						open={open}
						fullWidth
						maxWidth="xs"
						PaperProps={{
							style: {
								borderRadius: "16px", // モダンな丸みを強調
								boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // ソフトな影
								padding: "16px",
							},
						}}
						BackdropProps={{
							style: {
								backgroundColor: "rgba(0, 0, 0, 0.4)", // 半透明の背景
							},
						}}
					>
						<DialogTitle
							style={{
								textAlign: "center",
								fontWeight: "bold",
								fontSize: "1.25rem",
								color: "#333",
							}}
						>
							共有する
						</DialogTitle>
						<DialogContent dividers>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<FacebookShareButton url={shareUrl} style={{ width: "100%" }}>
										<Button
											variant="contained"
											startIcon={<FacebookIcon size={24} round />}
											fullWidth
											sx={{
												backgroundImage: "linear-gradient(45deg, #4267B2, #29487D)", // Facebookブルーのグラデーション
												color: "white",
												"&:hover": {
													backgroundImage: "linear-gradient(45deg, #365899, #223A6A)", // ホバー時の色
												},
												boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
											}}
										>
											Facebookで共有
										</Button>
									</FacebookShareButton>
								</Grid>
								<Grid item xs={12}>
									<TwitterShareButton
										url={shareUrl}
										title={title}
										style={{ width: "100%" }}
									>
										<Button
											variant="contained"
											startIcon={<XIcon size={24} round />}
											fullWidth
											sx={{
												backgroundImage: "linear-gradient(45deg, #1DA1F2, #0C85D0)", // Twitterブルーのグラデーション
												color: "white",
												"&:hover": {
													backgroundImage: "linear-gradient(45deg, #0C85D0, #007AB8)", // ホバー時の色
												},
												boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
											}}
										>
											Xで共有
										</Button>
									</TwitterShareButton>
								</Grid>
								<Grid item xs={12}>
									<Button
										variant="contained"
										startIcon={<LinkIcon />}
										fullWidth
										onClick={() => {
											if (navigator.clipboard && shareUrl) {
												navigator.clipboard.writeText(shareUrl).then(
													() => {
														alert("リンクをコピーしました。");
													},
													(err) => {
														alert("リンクのコピーに失敗しました。");
														console.error(err);
													}
												);
											} else {
												alert("クリップボードにアクセスできません。");
											}
										}}
										sx={{
											backgroundColor: "#AD1457",
											color: "white",
											"&:hover": {
												backgroundColor: "#8E1247",
											},
											boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
										}}
									>
										リンクをコピー
									</Button>
								</Grid>
							</Grid>
						</DialogContent>
						<DialogActions style={{ justifyContent: "center" }}>
							<Button
								onClick={handleClose}
								color="secondary"
								sx={{ fontWeight: "bold" }}
							>
								閉じる
							</Button>
						</DialogActions>
					</Dialog>
				)}
			</div>
		</div>
	);
};
