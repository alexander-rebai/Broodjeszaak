import React from "react";
import styles from "../styles/PizzaList.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSalad } from "../redux/cartSlice";

const Saladbar = () => {
  const basis = [
    "gemengde sla",
    "rucola",
    "ijsbergsla",
    "pasta",
    "rijst",
    "couscous",
    "quinoa",
    "aardappel",
  ];
  const groente = [
    "cherrytomaat",
    "bloemkool",
    "paprika",
    "mais",
    "wortel",
    "komkommer",
    "tomaat",
    "tuinkers",
    "perzik",
    "ei",
  ];
  const proteine = [
    "feta",
    "kipfilet",
    "tonijn",
    "hesp",
    "tonijnsla (+ €1)",
    "krabsla (+ €1)",
    "geitenkaas (+ €1)",
    "mozzarella (+ €1)",
    "gerookte zalm (+ €3)",
  ];
  const afwerking = [
    "notenmix",
    "parmezaanse kaas",
    "rozijnen",
    "peterselie",
    "gedroogde ui",
    "olijven",
    "verse ui",
    "zongedroogde tomaat",
    "zilveruitjes",
    "augurken",
  ];
  const dressing = [
    "mayonaise",
    "cocktail",
    "yoghurtdressing",
    "bieslookvinaigrette",
    "olijfolie",
    "honing-mosterd vinaigrette",
  ];

  const [basisList, setBasisList] = useState([]);
  const [groenteList, setGroenteList] = useState([]);
  const [proteineList, setProteineList] = useState([]);
  const [afwerkingList, setAfwerkingList] = useState([]);
  const [dressingList, setDressingList] = useState([]);
  const [showSalad, setShowSalad] = useState(false);
  const [salad, setSalad] = useState({
    title: "Salad",
    basis: [],
    groente: [],
    proteine: [],
    afwerking: [],
    dressing: [],
    quantity: 1,
    price: 9,
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addSalad({ ...salad }));
    setShowSalad(false);
  };

  //rerender every time calculeted price changes
  useEffect(() => {
    calculatePrice();
  }, [salad.basis, salad.groente, salad.proteine, salad.afwerking, salad.dressing]);

  const openSalad = () => {
    if (
      !basisList.length ||
      !groenteList.length ||
      !proteineList.length ||
      !afwerkingList.length ||
      !dressingList.length
    ) {
      alert("Je moet minstens 1 ingredient in elke categorie selecteren");
    } else {
      setShowSalad(true);
    }
    calculatePrice();
  };

  const calculatePrice = () => {
    let price = 9;
    if (proteineList.includes("gerookte zalm (+ €3)")) {
      price += 3;
    } else if (proteineList.includes("tonijnsla (+ €1)")) {
      price += 1;
    } else if (proteineList.includes("krabsla (+ €1)")) {
      price += 1;
    }else if (proteineList.includes("geitenkaas (+ €1)")) {
      price += 1;
    }else if (proteineList.includes("mozzarella (+ €1)")) {
      price += 1;
    }
    setSalad({
      ...salad,
      basis: basisList,
      groente: groenteList,
      proteine: proteineList,
      afwerking: afwerkingList,
      dressing: dressingList,
      price: price,
    });
    console.log(price);
  };

  const handleChangeBasis = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      if (basisList.length <= 1) {
        setBasisList([...basisList, item]);
      } else {
        alert("You can only choose 2 ingredients");
        e.target.checked = false;
      }
    } else {
      setBasisList(basisList.filter((o) => o !== item));
    }
    calculatePrice();
  };
  const handleChangeGroente = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      if (groenteList.length <= 3) {
        setGroenteList([...groenteList, item]);
      } else {
        alert("You can only choose 4 ingredients");
        e.target.checked = false;
      }
    } else {
      setGroenteList(groenteList.filter((o) => o !== item));
    }
    calculatePrice();
  };
  const handleChangeProt = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      if (proteineList.length <= 0) {
        setProteineList([...proteineList, item]);
      } else {
        alert("You can only choose 1 ingredients");
        e.target.checked = false;
      }
    } else {
      setProteineList(proteineList.filter((o) => o !== item));
    }
    calculatePrice();
  };
  const handleChangeAfwerking = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      if (afwerkingList.length <= 2) {
        setAfwerkingList([...afwerkingList, item]);
      } else {
        alert("You can only choose 3 ingredients");
        e.target.checked = false;
      }
    } else {
      setAfwerkingList(afwerkingList.filter((o) => o !== item));
    }
    calculatePrice();
  };
  const handleChangeDressing = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      if (dressingList.length <= 0) {
        setDressingList([...dressingList, item]);
      } else {
        alert("You can only choose 1 ingredients");
        e.target.checked = false;
      }
    } else {
      setDressingList(dressingList.filter((o) => o !== item));
    }
    calculatePrice();
  };

  return (
    <>
      <div className={styles.container1}>
        <div className={styles.wrapper}>
          <div className={styles.container2}>
            <h3>Basis (max.2)</h3>
            {basis.map((item, i) => (
              <div className={styles.option} key={item}>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  className={styles.checkbox}
                  onChange={(e) => handleChangeBasis(e, item)}
                />
                <label htmlFor="double">{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.container2}>
            <h3>Groente (max. 4)</h3>
            {groente.map((item, i) => (
              <div className={styles.option} key={item}>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  className={styles.checkbox}
                  onChange={(e) => handleChangeGroente(e, item)}
                />
                <label htmlFor="double">{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.container2}>
            <h3>Proteïne (max. 1)</h3>
            {proteine.map((item, i) => (
              <div className={styles.option} key={item}>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  className={styles.checkbox}
                  onChange={(e) => handleChangeProt(e, item)}
                />
                <label htmlFor="double">{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.container2}>
            <h3>Afwerking (max. 3)</h3>
            {afwerking.map((item, i) => (
              <div className={styles.option} key={item}>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  className={styles.checkbox}
                  onChange={(e) => handleChangeAfwerking(e, item)}
                />
                <label htmlFor="double">{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.container2}>
            <h3>Dressing (max.1)</h3>
            {dressing.map((item, i) => (
              <div className={styles.option} key={item}>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  className={styles.checkbox}
                  onChange={(e) => handleChangeDressing(e, item)}
                />
                <label htmlFor="double">{item}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        {!showSalad && (
          <button
            className={styles.button}
            onClick={() => {
              openSalad();
            }}
          >
            Bouw mijn Salade
          </button>
        )}
        {showSalad && (
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
            <p>€{salad.price}</p>
            <div className={styles.buttons}>
              <button className={styles.button} onClick={handleClick}>
                Toevoegen
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Saladbar;
