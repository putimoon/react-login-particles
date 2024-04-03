import React, { useEffect, useMemo, useState } from 'react'
import { Box, TextField,Button } from "@mui/material"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Login() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#0d47a1",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    return (
        <React.Fragment>
            {init && (
                <>
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                    />
                </>
            )}
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 1, width: "50%", backgroundColor: 'white', textAlign: "center", minHeight: "30vh" }}>
                <Box sx={{ margin: "10px auto", }}>
                    <TextField sx={{ width: "70%"}} size='small' id="outlined-basic" label="username" variant="outlined" />
                </Box>
                <Box sx={{ margin: "10px auto", }}>
                    <TextField sx={{ width: "70%"}} size='small' id="outlined-basic" label="password" type='password' variant="outlined" />
                </Box>
                <Button variant="contained">submit</Button>
            </Box>
        </React.Fragment>
    )
}

export default Login