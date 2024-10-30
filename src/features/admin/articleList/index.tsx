"use client";

import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import * as React from "react";

export const ArticleList: FC = () => {
	const router = useRouter();

	function createData(id: string, title: string, price: number) {
		return { id, title, price };
	}

	const rows = [
		createData("1", "タイトルA", 1000),
		createData("2", "タイトルB", 2000),
		createData("3", "タイトルC", 3000),
		createData("4", "タイトルD", 4000),
		createData("5", "タイトルD", 4000),
		createData("6", "タイトルD", 4000),
		createData("7", "タイトルD", 4000),
		createData("8", "タイトルD", 4000),
		createData("9", "タイトルD", 4000),
		createData("10", "タイトルD", 4000),
		createData("11", "タイトルD", 4000),
		createData("12", "タイトルD", 4000),
		createData("13", "タイトルD", 4000),
		createData("14", "タイトルD", 4000),
		createData("15", "タイトルD", 4000),
		createData("16", "タイトルD", 4000),
		createData("17", "タイトルD", 4000),
		createData("18", "タイトルD", 4000),
		createData("19", "タイトルD", 4000),
	];

	return (
		<>
			<TableContainer component={Paper} sx={{ my: 2 }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>タイトル</TableCell>
							<TableCell>価格</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell>{row.title}</TableCell>
								<TableCell>{row.price}</TableCell>
								<TableCell align="right">
									<Button
										variant="contained"
										onClick={() => {
											router.push(`/admin/list/${row.id}`);
										}}
									>
										修正
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
