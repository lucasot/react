import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/box"

const Map = ({ elements }) => {
    return(
        <>
        <Box sx={{ margin 50 }}>
            <Grid 
                container 
                spacing = {7}
                alignContent = "center"
                justifyContent = "center"
                sx={{m:2}}
                >
                    <Grid container item xs={2} spacing={3}> 
                        Nombre:
                        {elements.nombre}
                    </Grid>
                    <Grid container item xs={2} spacing={3}>
                        Edad:
                        {elements.edad}
                    </Grid>
                    <Grid container item xs={2} spacing={3}>
                        Ocupacion:
                        {elements.ocupacion}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export defaut Map;