import { Box, Switch, Typography } from "@mui/material";
import type { FC } from "react";

export const Settings: FC = () => {
	return (
		<>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderRight: "none",
						height: 40,
						width: "60%",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography>設定1</Typography>
				</Box>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						height: 40,
						width: "40%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Switch defaultChecked />
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderRight: "none",
						borderTop: "none",
						height: 40,
						width: "60%",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography>設定2</Typography>
				</Box>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderTop: "none",
						height: 40,
						width: "40%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Switch defaultChecked />
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderRight: "none",
						borderTop: "none",
						height: 40,
						width: "60%",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography>設定3</Typography>
				</Box>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderTop: "none",
						height: 40,
						width: "40%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Switch defaultChecked />
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderRight: "none",
						borderTop: "none",
						height: 40,
						width: "60%",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography>設定4</Typography>
				</Box>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderTop: "none",
						height: 40,
						width: "40%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Switch defaultChecked />
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderRight: "none",
						borderTop: "none",
						height: 40,
						width: "60%",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography>設定5</Typography>
				</Box>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderTop: "none",
						height: 40,
						width: "40%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Switch defaultChecked />
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderRight: "none",
						borderTop: "none",
						height: 40,
						width: "60%",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography>設定6</Typography>
				</Box>
				<Box
					sx={{
						p: 1,
						border: "1px solid #00000050",
						borderTop: "none",
						height: 40,
						width: "40%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Switch defaultChecked />
				</Box>
			</Box>
		</>
	);
};
