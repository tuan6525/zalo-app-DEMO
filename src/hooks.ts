import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { MutableRefObject, useLayoutEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { UIMatch, useMatches } from "react-router-dom";
import { cartState, cartTotalState } from "@/state";
import { Cart, CartItem, Product, SelectedOptions } from "types";
import { getDefaultOptions, isIdentical } from "@/utils/cart";
import { getConfig } from "@/utils/template";
import { openChat, purchase } from "zmp-sdk";

export function useRealHeight(
  element: MutableRefObject<HTMLDivElement | null>,
  defaultValue?: number
) {
  const [height, setHeight] = useState(defaultValue ?? 0);
  useLayoutEffect(() => {
    if (element.current && typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const [{ contentRect }] = entries;
        setHeight(contentRect.height);
      });
      ro.observe(element.current);
      return () => ro.disconnect();
    }
    return () => {};
  }, [element.current]);

  if (typeof ResizeObserver === "undefined") {
    return -1;
  }
  return height;
}

export function useAddToCart(product: Product, editingCartItemId?: number) {
  const [cart, setCart] = useAtom(cartState);
  const editing = useMemo(
    () => cart.find((item) => item.id === editingCartItemId),
    [cart, editingCartItemId]
  );

  const [options, setOptions] = useState<SelectedOptions>(
    editing ? editing.options : getDefaultOptions(product)
  );

  function handleReplace(quantity: number, cart: Cart, editing: CartItem) {
    if (quantity === 0) {
      // the user wants to remove this item.
      cart.splice(cart.indexOf(editing), 1);
    } else {
      const existed = cart.find(
        (item) =>
          item.id != editingCartItemId &&
          item.product.id === product.id &&
          isIdentical(item.options, options)
      );
      if (existed) {
        // there's another identical item in the cart; let's remove it and update the quantity in the editing item.
        cart.splice(cart.indexOf(existed), 1);
      }
      cart.splice(cart.indexOf(editing), 1, {
        ...editing,
        options,
        quantity: existed
          ? existed.quantity + quantity // updating the quantity of the identical item.
          : quantity,
      });
    }
  }

  function handleAppend(quantity: number, cart: Cart) {
    const existed = cart.find(
      (item) =>
        item.product.id === product.id && isIdentical(item.options, options)
    );
    if (existed) {
      // merging with another identical item in the cart.
      cart.splice(cart.indexOf(existed), 1, {
        ...existed,
        quantity: existed.quantity + quantity,
      });
    } else {
      // this item is new, appending it to the cart.
      cart.push({
        id: cart.length + 1,
        product,
        options,
        quantity,
      });
    }
  }

  const addToCart = (quantity: number) => {
    setCart((cart) => {
      const res = [...cart];
      if (editing) {
        handleReplace(quantity, res, editing);
      } else {
        handleAppend(quantity, res);
      }
      return res;
    });
  };

  return { addToCart, options, setOptions };
}

export function useCustomerSupport() {
  return () =>
    openChat({
      type: "oa",
      id: getConfig((config) => config.template.oaIDtoOpenChat),
    });
}

export function useToBeImplemented() {
  return () =>
    toast("Chức năng dành cho các bên tích hợp phát triển...", {
      icon: "🛠️",
    });
}

export function useCheckout() {
  const { totalAmount } = useAtomValue(cartTotalState);
  const setCart = useSetAtom(cartState);
  return async () => {
    try {
      await purchase({
        amount: totalAmount,
        desc: "Thanh toán đơn hàng",
        method: "",
      });
      toast.success("Thanh toán thành công. Cảm ơn bạn đã mua hàng!", {
        icon: "🎉",
      });
      setCart([]);
    } catch (error) {
      toast.error(
        "Thanh toán thất bại. Vui lòng kiểm tra nội dung lỗi bên trong Console."
      );
      console.warn(error);
    }
  };
}

export function useRouteHandle() {
  const matches = useMatches() as UIMatch<
    undefined,
    {
      title?: string | Function;
      logo?: boolean;
      back?: boolean;
      scrollRestoration?: number;
    }
  >[];
  const lastMatch = matches[matches.length - 1];

  return [lastMatch.handle, lastMatch, matches] as const;
}




const fakeVoucherData = [
  { code: 'ABC123', isValid: true },
  { code: 'XYZ456', isValid: false },
  { code: 'DEF789', isValid: true },
];

export function useVoucherRedeem() {
  const [isRedeemed, setIsRedeemed] = useState(false);

  const handleVoucherRedeem = (voucherCode) => {
    // Logic để đổi voucher ở đây
    const voucher = fakeVoucherData.find(v => v.code === voucherCode);

    if (voucher) {
      if (voucher.isValid) {
        setIsRedeemed(true);
        alert('Voucher đã được đổi thành công!');
      } else {
        alert('Voucher không hợp lệ. Vui lòng thử lại.');
      }
    } else {
      alert('Voucher không tồn tại. Vui lòng thử lại.');
    }
  };

  return handleVoucherRedeem;
}
