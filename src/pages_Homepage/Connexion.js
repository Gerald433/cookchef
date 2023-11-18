import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Connexion.module.scss";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  nom: yup.string().required("Le nom est requis"),
  prenom: yup.string().required("Le prénom est requis"),
  dateNaissance: yup.string().required("La date de naissance est requise"),
  adresse: yup.string().required("L'adresse est requise"),
  codePostal: yup.string().required("Le code postal est requis"),
  ville: yup.string().required("La ville est requise"),
  telephone: yup.string().required("Le telephone est requis"),
  mail: yup.string().required("L'adresse mail est requise"),
  motDePasse: yup.string().required("Le mot de passe est requis"),
  confirmationMotDePasse: yup
    .string()
    .oneOf(
      [yup.ref("motDePasse"), null],
      "Les mots de passe doivent correspondre"
    )
    .required("La confirmation du mot de passe est requise"),
});

function Connexion() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // La soumission du formulaire a réussi, utilisez les données comme nécessaire
    console.log("Formulaire soumis :", data);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nom">
          Nom:
          <input type="text" name="nom" ref={register} />
          {errors && errors.nom && <p>{errors.nom.message}</p>}
        </label>
        <label htmlFor="prenom">
          Prenom:
          <input type="text" name="prenom" ref={register} />
          {errors && errors.prenom && <p>{errors.prenom.message}</p>}
        </label>
        {/* <label htmlFor="dateNaissance">
          Date de naissance :
          <input type="text" name="dateNaissance" ref={register} />
          {errors && errors.dateNaissance && (
            <p>{errors.dateNaissance.message}</p>
          )}
        </label>
       
        <label htmlFor="adresse">
          Adresse:
          <input type="text" name="adresse" ref={register} />
          {errors && errors.adresse && <p>{errors.adresse.message}</p>}
        </label> */}

        <button type="submit">Valider</button>
      </form>
    </>
  );
}

export default Connexion;
