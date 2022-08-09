<div className={styles.container2}>
                {!showSalad &&
                    <button className={styles.button} onClick={() => {
                        calculatePrice()
                        setShowSalad(true);
                    }}>Bouw mijn Salade</button>
                }
                {showSalad &&
                    <>
                        <h3>Gekozen items:</h3>
                        <ul>
                            <li>Basis: {basisList.map((item, i) => item + ", ")}</li>
                            <li>Groente: {groenteList.map((item, i) => item + ", ")}</li>
                            <li>Proteïne: {proteineList.map((item, i) => item + ", ")}</li>
                            <li>Afwerking: {afwerkingList.map((item, i) => item + ", ")}</li>
                            <li>Dressing: {dressingList.map((item, i) => item + ", ")}</li>
                        </ul>
                        <h3>Totaal Prijs:</h3>
                        <p>
                            €{salad.price}
                        </p>
                        <div className={styles.buttons}>
                            <button className={styles.button} onClick={handleClick}>Toevoegen</button>
                        </div>
                    </>
                }
            </div>