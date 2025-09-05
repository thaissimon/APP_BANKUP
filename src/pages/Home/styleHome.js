import { colors } from "../../styles/colors";
export const styles = {
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40, // Espaçamento superior para dispositivos iOS com notch
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 50, // Espaçamento para não ficar colado na barra inferior
  },
  welcomeText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 25,
  },
  highlightText: {
    fontWeight: "bold",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 95,
    backgroundColor: "#1c1c1c",
    borderTopColor: "#333",
    borderTopWidth: 1,
  },
  icon: {
    padding: 10,
  },
  activeIcon: {
    backgroundColor: "#25D366",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    top: -20, // Move o ícone para cima
    shadowColor: "#25D366",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
};
