import { atom } from "jotai";
import { Order } from "@/types";

export const ordersState = atom<Order[]>([]); // Xác định kiểu là Order[]
