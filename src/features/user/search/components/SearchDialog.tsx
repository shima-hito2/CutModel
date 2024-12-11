"use client";
import { Slide, Button, Dialog, AppBar, Toolbar, IconButton, Typography, TextField, MenuItem, Checkbox, FormControlLabel, Slider, FormGroup, Box } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { FC } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const SearchDialog: FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ boxShadow: 3 }}>
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', backgroundColor: 'rgb(255, 64, 129)', boxShadow: 'none' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Search
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Apply
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100%', borderRadius: 3 }}>
                    <form>
                        {/* Freeword Search */}
                        <TextField
                            fullWidth
                            label="サロン名など"
                            variant="outlined"
                            margin="normal"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 2,
                                boxShadow: 1,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ccc',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#AD1457',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#AD1457',
                                    }
                                }
                            }}
                        />

                        {/* Station Select */}
                        <Typography variant="h6">駅</Typography>
                        <TextField
                            select
                            fullWidth
                            label="Station"
                            variant="outlined"
                            margin="normal"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 3,
                                boxShadow: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ccc',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#AD1457',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#AD1457',
                                    }
                                }
                            }}
                        >
                            <MenuItem value="station1">大阪駅</MenuItem>
                            <MenuItem value="station2">梅田駅</MenuItem>
                            <MenuItem value="station3">東梅田駅</MenuItem>
                        </TextField>

                        {/* Menu Type (Checkbox) */}
                        <FormGroup sx={{ marginBottom: 2 }}>
                            <Typography sx={{ fontWeight: 500, marginBottom: 1 }}>メニューの種類</Typography>
                            <FormControlLabel control={<Checkbox />} label="Type 1" />
                            <FormControlLabel control={<Checkbox />} label="Type 2" />
                            <FormControlLabel control={<Checkbox />} label="Type 3" />
                        </FormGroup>

                        {/* Price Range (Slider) */}
                        <Typography gutterBottom sx={{ fontWeight: 500 }}>Price Range</Typography>
                        <Slider
                            value={[0, 10000]}
                            onChange={() => { }}
                            valueLabelDisplay="auto"
                            min={0}
                            max={10000}
                            valueLabelFormat={(value) => `¥${value}`}
                            sx={{
                                marginBottom: 2,
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#AD1457',
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#AD1457',
                                }
                            }}
                        />

                        {/* Recruitment Date (Calendar) */}
                        <TextField
                            fullWidth
                            label="Recruitment Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            margin="normal"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 2,
                                boxShadow: 1,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ccc',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#AD1457',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#AD1457',
                                    }
                                }
                            }}
                        />

                        {/* Recruitment Type (Checkbox) */}
                        <FormGroup sx={{ marginBottom: 2 }}>
                            <Typography sx={{ fontWeight: 500, marginBottom: 1 }}>Recruitment Type</Typography>
                            <FormControlLabel control={<Checkbox />} label="Full-time" />
                            <FormControlLabel control={<Checkbox />} label="Part-time" />
                            <FormControlLabel control={<Checkbox />} label="Freelance" />
                        </FormGroup>

                        {/* Hairdresser Filters */}
                        <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: 2 }}>Hairdresser Filters</Typography>

                        {/* Gender (Checkbox) */}
                        <FormGroup sx={{ marginBottom: 2 }}>
                            <Typography sx={{ fontWeight: 500, marginBottom: 1 }}>Gender</Typography>
                            <FormControlLabel control={<Checkbox />} label="Male" />
                            <FormControlLabel control={<Checkbox />} label="Female" />
                            <FormControlLabel control={<Checkbox />} label="Non-binary" />
                        </FormGroup>

                        {/* Specialties (Checkbox) */}
                        <FormGroup sx={{ marginBottom: 2 }}>
                            <Typography sx={{ fontWeight: 500, marginBottom: 1 }}>Specialties</Typography>
                            <FormControlLabel control={<Checkbox />} label="Haircut" />
                            <FormControlLabel control={<Checkbox />} label="Color" />
                            <FormControlLabel control={<Checkbox />} label="Perm" />
                        </FormGroup>

                        {/* Rating (Slider) */}
                        <Typography gutterBottom sx={{ fontWeight: 500 }}>Rating</Typography>
                        <Slider
                            value={[0, 5]}
                            onChange={() => { }}
                            valueLabelDisplay="auto"
                            min={0}
                            max={5}
                            step={0.5}
                            valueLabelFormat={(value) => `${value} stars`}
                            sx={{
                                marginBottom: 2,
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#AD1457',
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#AD1457',
                                }
                            }}
                        />

                        {/* Payment Methods (Checkbox) */}
                        <FormGroup>
                            <Typography sx={{ fontWeight: 500, marginBottom: 1 }}>Payment Methods</Typography>
                            <FormControlLabel control={<Checkbox />} label="Cash" />
                            <FormControlLabel control={<Checkbox />} label="Credit Card" />
                            <FormControlLabel control={<Checkbox />} label="PayPal" />
                        </FormGroup>
                    </form>
                </Box>
            </Dialog>
        </>
    );
};

