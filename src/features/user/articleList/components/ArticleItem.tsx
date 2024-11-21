/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import Link from "next/link";
import type { ArticleItem as TArticleItem } from "@/app/type/articleItem";

type Props = {
	article: TArticleItem;
};

export const ArticleItem: FC<Props> = (props: Props) => {
	const { article } = props;

	return (
		<div style={{ border: "1px solid #e0e0e0", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", backgroundColor: "white", margin: "16px", position: "relative" }}>
			<div style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "16px 16px 5px 16px",
			}}>
				<img src={article.user.imageUrl} alt={article.user.name} style={{
					borderRadius: "50%",
					width: "50px",
					height: "50px",
					border: "1px solid #e0e0e0",
				}} />
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
					<h3 style={{
						margin: "0",
						fontSize: "16px",
						fontWeight: "bold",
					}}>
						{article.user.name}
					</h3>
					<p>
						店舗名
					</p>
				</div>
			</div>
			<Link href={`/list/${article.details.id}`} passHref target="_blank"
				style={{
					border: '1px solid #e0e0e0',
					borderRadius: '8px',
					overflow: 'hidden',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: 'white',
					margin: '0 16px',
					position: 'relative',
				}}>
				<img
					src={article.user.imageUrl}
					alt={article.user.name}
					style={{
						width: '100%',
						aspectRatio: '16/9',
						objectFit: 'fill',
					}}
				/>
				{/* 画像の上に本文を重ねるためのスタイル */}
				<div
					style={{
						position: 'absolute',
						top: '75%',
						left: '0',
						right: '0',
						bottom: '0',
						background: 'rgba(0, 0, 0, 0.1)',
						color: 'white',
						padding: '10px',
						display: 'flex',
						alignItems: 'flex-end',
						zIndex: '1',
					}}
				>
					<p style={{
						fontSize: '12px',
						color: '#fff',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}>
						{article.details.body}
					</p>
				</div>
			</Link>
			<div style={{
				padding: '16px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
				{/* お気に入りボタン */}
				<button style={buttonStyle}>
					❤️ お気に入り
				</button>
				<p style={{
					margin: '0',
					fontSize: '12px',
				}}>
					{article.details.price}円
				</p>
				{/* 共有ボタン */}
				<button style={buttonStyle}>
					🔗 共有
				</button>
			</div>
		</div>
	);
};

// ボタンのスタイル
const buttonStyle: React.CSSProperties = {
	backgroundColor: '#f0f0f0',
	border: '1px solid #e0e0e0',
	borderRadius: '20px',
	padding: '8px 16px',
	cursor: 'pointer',
	fontSize: '14px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'all 0.3s ease', // ホバー時にアニメーション効果を追加
};

