const DrinkAgain = () => {

    const wines = [{
        id: 1,
        imageUrl: '/red-wine.jpg',
        isNew: true,
        label: 'Wine',
        isFinished: true,
    }, {
        id: 2,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
    }, {
        id: 3,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isNew: true,
        isFinished: true,
    }, {
        id: 4,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
    }, {
        id: 5,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isNew: true,
        isFinished: true,
    }, {
        id: 6,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
    }, {
        id: 7,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
    }, {
        id: 8,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
    }, {
        id: 1,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
    }, {
        id: 2,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
    }, {
        id: 3,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
    }, {
        id: 4,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
    }, {
        id: 5,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
    }, {
        id: 6,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
    }, {
        id: 7,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
    }, {
        id: 8,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
    }];


   

    const finished = wines.filter(wine => wine.isFinished === true);
    
   



    return (

        <section className="category">
            <h2>Drink Again</h2>
            <ul>
                {finished.map((finished) =>(
                    <li key={finished.id}>
                    <div className="wine">
                        <img src={finished.imageUrl} alt={finished.label} />
                        {(() => {
                            if (finished.isNew) {
                                return <span className="new-badge">New!</span>
                            }
                        })()}
                    </div>
                </li>
                ))}
          
 
            </ul>
        </section>
     
    );
}

export default DrinkAgain