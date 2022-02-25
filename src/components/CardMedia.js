import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Card.css";
import { Link } from "react-router-dom";
import "../App.css";

export default function MediaCard() {
  return (
    <div className="pt-8 text-lg font-bold text-center text-gray-900 md:text-4xl">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="flex items-center justify-center">
        <div className="grid gap-10 px-20 py-10 md:grid-cols-2 lg:grid lg:grid-cols-3 md:gap-20">
          <Link to="/service">
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <div className="overflow">
                  <CardMedia className="card-img-top" component="img" height="200" alt="green iguana" image={require("../assets/bg1.jpg")} />
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/service">
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <div className="overflow">
                  <CardMedia className="card-img-top" component="img" height="200" alt="green iguana" image={require("../assets/bg2.jpg")} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/service">
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <div className="overflow">
                  <CardMedia className="card-img-top" component="img" height="200" alt="green iguana" image={require("../assets/bg3.jpg")} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/contact">
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <div className="overflow">
                  <CardMedia className="card-img-top" component="img" height="200" alt="green iguana" image={require("../assets/bg6.jpg")} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/contact">
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <div className="overflow">
                  <CardMedia className="card-img-top" component="img" height="200" alt="green iguana" image={require("../assets/bg5.jpg")} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/contact">
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <div className="overflow">
                  <CardMedia className="card-img-top" component="img" height="200" alt="green iguana" image={require("../assets/b6.jpg")} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
