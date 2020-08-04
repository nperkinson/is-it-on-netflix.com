import React from 'react';
import './main.css';

export default function Results() {
  return (
    <div class='center'>
        <div class='media'>
            <div>
                <div>
                    {/* <h2 id="where-header">Where it's at</h2> */}
                    <br></br>
                </div>
                <div class='sites'>
                    <a class='site-links' href="https://netflix.com" target="_blank">
                            {/* <img class='site' src="/src/assets/logos/netflix.jpeg" height="60px"> */}
                            <img id='netflix' class='site' src="https://cdn.vox-cdn.com/thumbor/b2LJ2f4H9lrK20I_1YVbt21UDnE=/1400x788/filters:format(png)/cdn.vox-cdn.com/assets/755523/netflix-logo-705px.png" height="60px">
                            </img>
                    </a>
                    <a class='site-links' href="https://hulu.com" target="_blank">
                            {/* <img class='site' src="/src/assets/logos/hulu.jpg" height="60px"> */}
                            <img id='hulu' class='site' src="https://cdn.jns.org/uploads/2019/02/38239969986_5462dc0a45_b-880x495.jpg" height="60px">

                            </img>
                    </a>
                    <a class='site-links' href="https://hbo.com" target="_blank">
                            {/* <img class='site' src="/src/assets/logos/hbo.png" height="60px"> */}
                            <img id='hbo' class='site' src="https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-HBO.png" height="60px">

                            </img>
                    </a>
                    <a class='site-links' href="https://https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011.com" target="_blank">
                            {/* <img class='site' src="/src/assets/logos/amazon.jpg" height="60px"> */}
                            <img id='amazon' class='site' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRJaEy2QJxv5SuU56kyq5-7P4DNh4piysR6A&usqp=CAU" height="60px">

                            </img>
                    </a>
                    <a class='site-links' href="https://www.disneyplus.com" target="_blank">
                            {/* <img class='site' src="/src/assets/logos/disney.jpg" height="60px"> */}
                            <img id='disney' class='site' src="https://external-preview.redd.it/QWQRnnGNj7pfaTPPJFRHnyEqsxpKAcB4RY18hFgp_38.jpg?auto=webp&s=71bf3f6675e99108ed96fd8523da3eb8ad797880" height="60px">

                            </img>
                    </a>
                </div>
                
                <br></br>
            </div>
        </div>
    </div>
  );
}