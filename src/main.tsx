import React, { StrictMode, useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Debounce from './Debounce.tsx';
import MemoExample from './MemoExample.tsx'
import UndoableCounter from './UndoableCounter.tsx';
import Progress from './Progress.tsx';
import GridLights from './GridLights.tsx';
import CustomRadio from './CustomRadio.tsx';
import Folder from './Folder.tsx';
import Emi from './Emi.tsx';
import Theme from './Theme.tsx';
import Product from './Product.tsx';
import MultiSearch from './MultiSearch.tsx';
import Test from './test.tsx';
import PhoneOtpLogin from './PhoneOtpLogin.tsx';
import TIcTacToe from './TIcTacToe.tsx';
import First from './First.tsx';
import Stepper from './Stepper.tsx';
import MainTooltip from './tooltip/MainTooltip.tsx';
import Chess from './Chess.tsx';
import DragDrop from './DragDrop.tsx';
import Rating from './Rating.tsx';
import MemoryGame from './MemoryGame.tsx';
// import {ContextProvider} from './context/contextProvider.tsx'
import Calculator from './Calculator.tsx';
import Directory from './Directory.tsx';
import Wordle from './Wordle.tsx';
import Contextprovider from './wordle/ContextProvider.tsx';
// import Main from './counter/Main.tsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import store from './shopping-cart/store.ts';
import Cart from './shopping-cart/Cart.tsx';
import { chatStore } from './chat-app/chat-store.ts';
import Chat from './chat-app/Chat.tsx';
import Reactive from './Reactive.tsx';
import SortableTable from './SortableTable.tsx';
import ToDo from './ToDo.tsx';
import FrontendQuiz from './FrontendQuiz.tsx';
// import Main from './routing/Main.tsx';
// import store from './learn-redux/store.ts';
import Redux from './redux-toolkit/Redux.tsx';
import { dataStore } from './redux-toolkit/store.ts';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Query from './react-query/Query.tsx';
// import Page from './react-query/Page.tsx';
import MainChat from './Chat.tsx';
import Fetch from './Fetch.tsx';
import Parent from './Parent.tsx';
import createSagaMiddleware from 'react-saga';

import Store from './toolkit/store.ts';
import Home from './toolkit/Home.tsx';
import CatStore from './toolkit-saga/store.ts';
import Cat from './toolkit-saga/Cat.tsx';
import Infinite from './Infinite.tsx';
import Main from './breadcrumb/Main.tsx';
import Color from './Color.tsx';
import A from './mmt/A.tsx';
import ExamTest from './ExamTest.tsx';
import Form from './rerender/Form.tsx';
import FormProvider from './rerender/FormProvider.tsx';
// import store from './toolkit/store.ts';
// import Modal from './Modal.tsx';
import Page from './Page.tsx';
import Pinterest from './Pinterest.tsx';
import store from './toolkit-saga/store.ts';
import App from './error-boundary/App.tsx'
import Sockets from './web-sockets/Sockets.tsx';
import InputPhone from './InputPhone.tsx';
import DatePicker from './DatePicker.tsx';
import Image from './lazy-load/Image.tsx';
import Loading from './Loading.tsx';
import Exam from './Exam.tsx';
import Recorder from './recorder/Recorder.tsx';
import Listing from './listing/Listing.tsx';
import Dictionary from './Dictionary.tsx';
import Circles from './Circles.tsx';
// import Highlight from './Highlight.tsx';
import TicTac from './TicTac.tsx';
import AccordionCheckbox from './AccordionCheckbox.tsx';
import MainProgress from './MainProgress.tsx';
import TabsList from './TabsList.tsx';
import Counter from './Counter.tsx';
import Builder from './form-builder/Builder.tsx';
import CountMe from './CountMe.tsx';
import Quiz from './Quiz.tsx';
import { Highlight } from './highlight-text/Highlight.tsx';
import Modal from './modal/Modal.tsx';
import Input from './todo/Input.tsx';
import Review from './review/Review.tsx';
import Calendar from './Calendar.tsx';
import Table from './Table.tsx';
import ProgressDiff from './ProgressDiff.tsx';
import RollDice from './RollDice.tsx';
import Auth from './authorize/Auth.tsx';
import ModalMain from './ModalMain.tsx';
import SelectableGrid from './SelectableGrid.tsx';
import LazyImage from './lazy-load/LazyImage.tsx';
import ParentComponent from './optimize/Parent.tsx';
import CMSDashboard from './cms/Dashboard.tsx';
import Carousel from './Carousel.tsx';
import ConnectFour from './ConnectFour.tsx';
import PixelArt from './PixelArt.tsx';

const data = {
  name: 'root',
  type: 'folder',
  children: [
    {
      name: 'folder1',
      type: 'folder',
      children: [
        { name: 'file1.txt', type: 'file' },
        { name: 'file2.txt', type: 'file' }
      ]
    },
    {
      name: 'folder2',
      type: 'folder',
      children: [
        { name: 'subfolder', type: 'folder', children: [{ name: 'file3.txt', type: 'file' }] },
        { name: 'file4.txt', type: 'file' }
      ]
    },
    { name: 'file5.txt', type: 'file' }
  ]
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PixelArt />
  </StrictMode>
)
