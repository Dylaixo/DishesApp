import { makeStyles } from "@material-ui/core";
export { }
export const useContentStyles = makeStyles({
  field: {
    width: 250,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 30,
  },
  fieldSticky: {
    width: 100,
    height: 50,
  },
  margin: {
    marginLeft: 30,
  },
});

export const useButtonStyles = makeStyles({
  button: {
    width: 350,
    backgroundColor: 'steelblue',
    height: 70,
    fontSize: "1.2rem",
    fontWeight: 'bold',
    color: 'white',
    marginTop: 80,
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
});