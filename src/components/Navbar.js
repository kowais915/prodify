import {Typography } from '@mui/material';
import {Button } from '@mui/material';
import {Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useState } from 'react'
import {TextField } from '@mui/material'




const Navbar = () => {


    const [counter, setCounter ] = useState(0);

    const inc = ()=>{
        setCounter((old)=>{
            return old + 1;
        })
    }

    const dec = ()=>{
        setCounter((old )=>{
            return old - 1;
        })
    }

    return ( 

        <div className="navbar">
            <h1>This is navbar</h1>

            <h2>
                Counter: {counter} 
            </h2>

            <Container>
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    color ="secondary"
                >
                   
                </Typography>

                <Button
                    onClick={()=>{
                        inc();
                    }}
                    color= "primary"
                    variant="outlined"
                    startIcon = {<AddBoxIcon/>}
                    
                >
                    Increment!
                    
                </Button>


              


                            <Button
                            onClick={()=>{
                                dec();
                            }}
                            variant="outlined"
                            color="error"
                            startIcon = {<DeleteIcon/>}
                          
                        >
                        
                            Decrement!
                        </Button>

                
                    <form noValidate autoComplete='off'>
                            <br/>
                            <TextField

                                label="Name"
                            >

                            </TextField>
                    </form>

            </Container>


          

        </div>
     );
}
 
export default Navbar;