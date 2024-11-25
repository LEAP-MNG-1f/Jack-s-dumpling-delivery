import AddressForm from "@/app/_features/PaymentAddressFrom";
import FoodPaymentList from "@/app/_features/FoodPaymentList";
import PaymentStep from "@/app/ui/PaymentStep";
import PaymentAddressForm from "@/app/_features/PaymentAddressFrom";

export default function PaymentPage() {
  return (
    <main className="flex pt-10 h-screen  justify-center">
      <div className="w-1/2 flex flex-col px-20 gap-4">
        <div className="w-1/2 flex flex-col gap-2">
          <PaymentStep title="Insert address" step="1" />
          <div className="w-[480px] rounded-2xl h-[480px] flex items-center justify-center border p-2">
            <PaymentAddressForm />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex  flex-col gap-2">
        <PaymentStep title="Confirmation" step="2" />
        <div className=" w-[480px] rounded-2xl h-[480px] flex items-center justify-center border p-2">
          <FoodPaymentList />
        </div>
      </div>
    </main>
  );
}
