@extends('layouts.main')

@section('title', 'Home')

@section('content')

@endsection

@section('image')
    {{-- TEST: pakai gambar dari internet --}}
    <img src="https://picsum.photos/800/600" 
         alt="Random Image"
         class="w-full h-full object-cover">
    
    {{-- Atau pake placeholder --}}
    {{-- <img src="{{ asset('images/hero.jpg') }}" alt="Hero"> --}}
@endsection
