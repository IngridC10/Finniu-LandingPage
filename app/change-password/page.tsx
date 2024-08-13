"use client";
import React, { Suspense, useEffect } from "react";
import ChangePassWordBody from "./components/ChangePassWordBody";
import { useRouter, useSearchParams } from "next/navigation";

const ChangePassWordPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ChangePassWordPageContent />
    </Suspense>
  );
};

const ChangePassWordPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      router.push("/password");
    }
  }, [email, router]);

  const redirectToLogin = () => {
    setTimeout(() => {
      router.push("/login");
    }, 5000);
  };

  if (!email) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ChangePassWordBody email={email} redirectToLogin={redirectToLogin} />
    </main>
  );
};

export default ChangePassWordPage;
