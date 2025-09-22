import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function PaymentForm() {
  const schema = z.object({
    cardHolder: z.string().min(1, { message: "Card Holder is required" }),
    cardNumber: z
      .string()
      .min(16, { message: "Card Number is required" })
      .max(16, { message: "Card Number is required" }),
    expirationDate: z
      .string()
      .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY"),
    cvv: z
      .string()
      .min(3, { message: "CVV is required" })
      .max(3, { message: "CVV is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const handlePaymentForm = (data) => {};

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolderName"
          className="text-xs text-gray-500 font-medium"
        >
          Card Holder Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardHolderName"
          placeholder="Card Holder Name"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="0078 0000 0000 0000"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration Date
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cvv"
          placeholder="000"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Image
          src={"/klarna.png"}
          alt="Klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src={"/cards.png"}
          alt="card"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src={"/stripe.png"}
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <button className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
        Checkout <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
}
