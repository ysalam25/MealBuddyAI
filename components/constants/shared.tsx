import { Dimensions } from "react-native";
import { colors } from "./colors";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    allign-items: center;
    background-color: ${colors.primary};
`;
export const ScreenWidth = Dimensions.get("window").width;
export const ScreenHeight = Dimensions.get("window").height;