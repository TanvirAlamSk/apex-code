import { useState } from "react";
import Container from "../components/common/Container";
import { bg_style } from "../utils/style";
import { HappyStudentsCard } from "../components/common/cards/learning";
import CourseCard from "../components/CourseCard";
import conelime from "../assets/Conelime.png";
import Frame1 from "../assets/Frame (1).png";
import limecircle from "../assets/limecircle.png";
import { Link } from "react-router";

const LIME = "#C6F500";
const BLUE = "#0F3DE8";

const course = [
  {
    id: 1,
    title: "Build Digital Asset",
    author: "pumpast studio",
    rating: "4.5",
    lavel: "Beginner",
    image: "https://i.postimg.cc/sD0pk47s/courses-2.png",
    price: "25",
    tenure: "lifetile",
    buyer: [
      {
        id: 1,
        img: "https://i.postimg.cc/VL3J9GX2/buyer1.png",
      },
      {
        id: 2,
        img: "https://i.postimg.cc/qvyz1sGm/buyer2.png",
      },
      {
        id: 3,
        img: "https://i.postimg.cc/bNKZ0C1K/buyer3.png",
      },
      {
        id: 4,
        img: "https://i.postimg.cc/YCYhd6xn/buyer4.png",
      },
    ],
  },
  {
    id: 2,
    title: "the Power of Big Data",
    author: "pumpast studio",
    rating: "4.5",
    lavel: "Beginner",
    image: "https://i.postimg.cc/GhSkWxGL/courses-3.png",
    price: "25",
    tenure: "lifetile",
    buyer: [
      {
        id: 1,
        img: "https://i.postimg.cc/VL3J9GX2/buyer1.png",
      },
      {
        id: 2,
        img: "https://i.postimg.cc/qvyz1sGm/buyer2.png",
      },
      {
        id: 3,
        img: "https://i.postimg.cc/bNKZ0C1K/buyer3.png",
      },
      {
        id: 4,
        img: "https://i.postimg.cc/YCYhd6xn/buyer4.png",
      },
    ],
  },
];

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-label="ByteSpace">
      <path
        d="M4 2h8v9.5c1.2-.9 2.7-1.5 4.4-1.5 4.2 0 7.6 3.4 7.6 7.5S20.6 25 16.4 25H4V2z"
        fill={LIME}
      />
      <path d="M11 14.5l7 3.5-7 3.5v-7z" fill={BLUE} />
    </svg>
  );
}

function Slot({ className = "", children }) {
  return <div className={`absolute ${className}`}>{children}</div>;
}

function LeftSide() {
  return (
    <section className="relative hidden h-190 self-start lg:block">
      <Container>
        <div className="absolute left-0 top-0">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="absolute left-0 top-17.5">
          <h2 className="text-sm font-semibold">Sign up and come in</h2>
          <p className="mt-2 text-xs text-white/90 lg:pr-30 leading-6">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        </div>

        <Slot className="left-16 top-50 z-20">
          <img src={limecircle} alt="" />
        </Slot>

        <Slot className="-right-8 bottom-25 z-20">
          <img src={Frame1} alt="" />
        </Slot>

        <Slot className="left-37.5 top-46.25 z-10">
          <CourseCard course={course[1]}></CourseCard>
        </Slot>

        <Slot className="-left-7 bottom-0 z-20">
          <img src={conelime} alt="" />
        </Slot>

        <Slot className="left-0 top-70 z-5">
          <CourseCard course={course[0]}></CourseCard>
        </Slot>

        <Slot className="left-55 bottom-13 z-18">
          <HappyStudentsCard style="bg-lime-400"></HappyStudentsCard>
        </Slot>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[11px] text-neutral-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-11 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-600 focus:bg-white focus:outline-none"
      />
    </div>
  );
}

function SignupCard() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full max-w-115 flex-col rounded-2xl bg-white p-8 sm:p-10">
      <p className="text-xs" style={{ color: BLUE }}>
        Create an Account
      </p>
      <h1 className="mt-1 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900">
        Welcome to
        <br />
        ByteSpace
      </h1>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <Field
          id="name"
          label="Full Name"
          placeholder="Jamie Davis"
          value={form.name}
          onChange={set("name")}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="designer@example.com"
          value={form.email}
          onChange={set("email")}
          autoComplete="email"
        />
        <Field
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={set("password")}
          autoComplete="new-password"
        />

        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="h-10 rounded-full px-6 text-sm font-medium text-neutral-900 transition hover:brightness-95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            style={{ backgroundColor: LIME }}
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-16 text-center text-[11px] text-neutral-500">
        Already have an account?{" "}
        <a href="/login" className="hover:underline" style={{ color: BLUE }}>
          Login
        </a>
      </p>
    </div>
  );
}

export default function Signup() {
  return (
    <main
      className={`relative min-h-screen w-full overflow-hidden text-white lg:px-24 ${bg_style}`}
    >
      <div className="mx-auto grid min-h-screen max-w-300 grid-cols-1 items-center gap-30 px-6 py-10 lg:grid-cols-2">
        <LeftSide />
        <section className="flex flex-col items-center lg:items-end">
          <div className="mb-6 self-start lg:hidden">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <SignupCard />
        </section>
      </div>
    </main>
  );
}
